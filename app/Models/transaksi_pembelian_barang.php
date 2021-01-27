<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaksi_pembelian_barang extends Model
{
    use HasFactory;
    protected $table = 'transaksi_pembelian_barang';
    protected $guarded = [];

    function barang(){
      return $this->belongsTo('App\Models\master_barang', 'master_barang_id', 'id');
    }
}
