import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { DataSource } from 'typeorm';
import { ExamResult } from './exam-result.entity';
import dataSource from '../ormconfig';

async function seed() {
  await dataSource.initialize();
  const examResultRepository = dataSource.getRepository(ExamResult);

  const results: ExamResult[] = [];

  fs.createReadStream('data.csv')
    .pipe(csvParser())
    .on('data', (row) => {
      const examResult = examResultRepository.create({
        sbd: row.sbd,
        toan: parseFloat(row.toan),
        ngu_van: parseFloat(row.ngu_van),
        ngoai_ngu: parseFloat(row.ngoai_ngu),
        vat_li: parseFloat(row.vat_li),
        hoa_hoc: parseFloat(row.hoa_hoc),
        sinh_hoc: parseFloat(row.sinh_hoc),
        lich_su: parseFloat(row.lich_su),
        dia_li: parseFloat(row.dia_li),
        gdcd: parseFloat(row.gdcd),
        ma_ngoai_ngu: row.ma_ngoai_ngu,
      });
      results.push(examResult);
    })
    .on('end', async () => {
      await examResultRepository.save(results);
      console.log('Seed thành công!');
      await dataSource.destroy();
    });
}

seed();
