<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransaksiPembelianBarangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksi_pembelian_barang', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('transaksi_pembelian_id')->nullable();
            $table->bigInteger('master_barang_id')->nullable();
            $table->integer('jumlah')->nullable();
            $table->double('harga_satuan', 15, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaksi_pembelian_barang');
    }
}
