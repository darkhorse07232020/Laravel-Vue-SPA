<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\JsonResponse;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/job/image', 'JobController@index');
Route::get('/job/style', 'JobController@getStyle');
Route::get('/job/door', 'JobController@getDoor');
Route::get('/job/material', 'JobController@getMaterial');
Route::get('/job/color', 'JobController@getColor');



