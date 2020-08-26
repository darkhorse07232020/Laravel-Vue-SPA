<?php

namespace App\Http\Controllers;

//Import Models
use App\Model\Style\Style_brand;

//Import Libraries
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JobController extends Controller
{
    //
    public function index()
    {
        return response()->json([

            'users' => 'Hello? buddy.'

        ], Response::HTTP_OK);
        
    }

    public function getStyle() {

    }

    public function getDoor() {

    }
}
