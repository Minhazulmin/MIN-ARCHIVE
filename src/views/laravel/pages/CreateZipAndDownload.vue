<template>
  <div class="ml-6 mr-6">
      <v-row class="mt-5">
        <v-col cols="12" md="12" xl="12" lg="12" sm="6" xs="12"  v-for="(dashboard,index) in dashboards" :key="index">
          <v-card  :prepend-icon="dashboard.icon" >
            <template v-slot:title>
              {{dashboard.title}} <v-btn icon="mdi-heart" color="red" size="x-small" class="float-end ms-3"></v-btn>
              <v-btn icon color="success" size="x-small" class="float-end"> <v-icon>mdi-thumb-up</v-icon> </v-btn>
            </template>
          

            <v-card-text class="ml-3">
             
            </v-card-text>
             <v-card-text class="ml-3">
              <v-alert border="start" border-color="deep-purple accent-4" elevation="2" > Step 1: Create new project </v-alert>
              <p  class="mt-7">Create a new project by following command</p>
               <v-alert class="mt-3" border="top" border-color="success" elevation="2" >
                    <pre>composer create-project laravel/laravel laravelZipDownload</pre>
                </v-alert>
                <v-alert class="mt-7" border="start" border-color="deep-purple accent-4" elevation="2" > Step 2: Create Route </v-alert>
                <p class="mt-7">First thing is we put one route in one for download created zip file. So simple add both routes in your route file.</p>
                <h4 class="mt-5">routes/web.php</h4>
                <v-alert class="mt-3" border="top" border-color="success" elevation="2" >
                    <pre>Route::get( '/download-zip', [ItemController::class, 'downloadZip'] );</pre>
                </v-alert>
           
                <v-alert class="mt-7" border="start" border-color="deep-purple accent-4" elevation="2" > Step 3: Create Controller </v-alert>
                <p class="mt-7">Same things as above for route, here we will add one new method for route. downloadZip() will generate new zip file and download as response, so let's add bellow</p>
                <h4 class="mt-5">app/Http/Controllers/ZipController.php</h4>

                <v-alert class="mt-3" border="top" border-color="success" elevation="2" >
 
<pre>
             
?php
   
namespace App\Http\Controllers;
   
use Illuminate\Http\Request;
use File;
use ZipArchive;
  
class ItemController extends Controller
{
     
   public function downloadZip()
	{
		$zip = new ZipArchive();
		$filename = "myFile.zip";
		if($zip->open(public_path($filename),ZipArchive::CREATE) === true){
			$files = File::files(public_path('documents'));
			foreach($files as $key=>$value){
				$nameOfFile = basename($value);
				$zip->addFile($value,$nameOfFile);
			}
			$zip->close();
		}
		 return response()->download(public_path($filename));
	}
}
</pre>
                </v-alert>
<!-- end controller part -->
                <p class="mt-7">Ok now you can run project and open that route like.</p>
                <v-alert class="mt-7" border="start" border-color="deep-purple accent-4" elevation="2" > Step 4: Create Folder </v-alert>
                <h4 class="mt-5">Create a new folder on public derictory.Folder name "documents"</h4>
                <v-alert class="mt-3" border="top" border-color="success" elevation="2" >
                  <p>Add multiple image or file on this folder</p><br>
                    minhaz_image.jpg<br>
                    minhaz_image.jpg<br>
                    minhaz_image.jpg<br>
                </v-alert>
                <p class="mt-7">Then run your project following command</p>
                <v-alert class="mt-3" border="top" border-color="success" elevation="2" >
                  <pre>php artisan serve</pre>
                </v-alert>
                <p class="mt-7">Now you can open bellow URL on your browser:</p>
                <v-alert class="mt-3" border="top" border-color="success" elevation="2" >
                  <pre>http://localhost:8000/download-zip</pre>
                </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>
<script>
export default {
  data:()=>({
    dashboards:[
      {title:'How to Create Zip File with multiple file or image and Download in Laravel', icon:'mdi-laravel ', number:'123456'},
    
    ]
  })

}
</script>