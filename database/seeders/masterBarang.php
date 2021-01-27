<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class masterBarang extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('master_barang')->insert([
        [ 'nama_barang' => 'Sabun batang', 'harga_satuan' => 3000, 'created_at' => now(), 'updated_at' => now() ],
        [ 'nama_barang' => 'Mi Instan', 'harga_satuan' => 2000, 'created_at' => now(), 'updated_at' => now() ],
        [ 'nama_barang' => 'Pensil', 'harga_satuan' => 1000, 'created_at' => now(), 'updated_at' => now() ],
        [ 'nama_barang' => 'Kopi sachet', 'harga_satuan' => 1500, 'created_at' => now(), 'updated_at' => now() ],
        [ 'nama_barang' => 'Air minum galon', 'harga_satuan' => 2000, 'created_at' => now(), 'updated_at' => now() ]
      ]);
    }
}
