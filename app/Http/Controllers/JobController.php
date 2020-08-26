<?php

namespace App\Http\Controllers;

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
