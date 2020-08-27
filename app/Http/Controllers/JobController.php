<?php

namespace App\Http\Controllers;

//Import Models
use App\Model\Style\Style_brand;

//Import Libraries
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;

class JobController extends Controller
{
    //
    public function index()
    {
        $data = Style_brand::all();
        return response()->json($data, Response::HTTP_OK);
        // return new JsonResponse(
        //     $data, 200
        // );
        
    }

    public function getStyle() {

    }

    public function getDoor() {

    }
}
