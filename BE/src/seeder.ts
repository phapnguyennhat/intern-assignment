import * as fs from 'fs';
import * as csvParser from 'csv-parser';


import dataSource from '../db/data-source'; 





import { ExamResult } from './database/entity/examResult.entity';


async function seed() {
  await dataSource.initialize();
  const examResultRepository = dataSource.getRepository(ExamResult);

  const BATCH_SIZE = 500;
  let batch: ExamResult[] = [];

  const saveBatch = async () => {
    if (batch.length > 0) {
      await examResultRepository.save(batch);
      batch = [];
    }
  };

  const stream = fs.createReadStream('./dataset/diem_thi_thpt_2024.csv')
    .pipe(csvParser());

  stream.on('data', async (row) => {
    const examResult = examResultRepository.create({
      sbd: row.sbd || null,
      toan: row.toan ? parseFloat(row.toan) : null,
      ngu_van: row.ngu_van ? parseFloat(row.ngu_van) : null,
      ngoai_ngu: row.ngoai_ngu ? parseFloat(row.ngoai_ngu) : null,
      vat_li: row.vat_li ? parseFloat(row.vat_li) : null,
      hoa_hoc: row.hoa_hoc ? parseFloat(row.hoa_hoc) : null,
      sinh_hoc: row.sinh_hoc ? parseFloat(row.sinh_hoc) : null,
      lich_su: row.lich_su ? parseFloat(row.lich_su) : null,
      dia_li: row.dia_li ? parseFloat(row.dia_li) : null,
      gdcd: row.gdcd ? parseFloat(row.gdcd) : null,
      ma_ngoai_ngu: row.ma_ngoai_ngu || null,
    });

    batch.push(examResult);

    if (batch.length >= BATCH_SIZE) {
      stream.pause(); 
      await saveBatch();
      stream.resume(); 
    }
  });

  stream.on('end', async () => {
    await saveBatch(); 
    console.log('Seed successfully!');
    await dataSource.destroy();
  });

  stream.on('error', (error) => {
    console.error('Error:', error);
  });
}

seed();