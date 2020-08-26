<?php

namespace App\Model\Style;

use Illuminate\Database\Eloquent\Model;

class Style_brand extends Model
{
    //
    protected $table = 'style_brand';

    public function get_data()
    {
        $result = DB::table($table)->get();
        return $result;
    }
}
