<?php

namespace App\Http\Controllers;

//Import Models
use App\Model\Style\Style_brand;
use App\Model\Style\Style_group;

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
        
    }

    public function getStyle(Request $request) {
        $cond=$request->condition;
        $data = Style_group::where('BrandID', $cond)->select('Name')->get();
        dd($data);
        return response()->json($data, Response::HTTP_OK);
    }

    public function getDoor() {
        $data = Style_brand::all();
        return response()->json($data, Response::HTTP_OK);
    }
}
