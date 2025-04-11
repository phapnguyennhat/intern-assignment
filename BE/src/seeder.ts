import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { DataSource } from 'typeorm';

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
      batch = []; // clear batch
    }
  };

  const stream = fs.createReadStream('./dataset/diem_thi_thpt_2024.csv')
    .pipe(csvParser());

  stream.on('data', async (row) => {
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

    batch.push(examResult);

    if (batch.length >= BATCH_SIZE) {
      stream.pause(); // tạm dừng stream để đợi save xong
      await saveBatch();
      stream.resume(); // tiếp tục stream
    }
  });

  stream.on('end', async () => {
    await saveBatch(); // save những cái còn lại
    console.log('Seed thành công!');
    await dataSource.destroy();
  });

  stream.on('error', (error) => {
    console.error('Error:', error);
  });
}

seed();