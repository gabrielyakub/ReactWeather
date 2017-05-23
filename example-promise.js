function getTempCallBack(location, callback){
  callback(undefined, 78);
  callback('City not found');

}


getTempCallBack('Jakarta', function(err, temp){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', temp);
  }
});


// using promises
function getTempPromise(location){
  return new Promise(function (resolve, reject){
    // fake a delay
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    }, 1000);
    // resolve(79);
    // reject('City not found');
  });
}

//jalanin dlu functionnya , trus .then itu buat ngehandle kalo sukses ngapain kalo gagal ngapain
// fungsi pertama buat sukses, fungsi kedua buat gagal
getTempPromise('Jakarta').then(function(temp){
  console.log('Promise success', temp);
}, function(err){
  console.log('Promise error', err);
});


//challange area
function addPromise(a,b){
  return new Promise(function (resolve, reject){
    if(typeof a === "number" && typeof b=== "number")
      resolve(a+b);
    else
      reject('NaN');
  });
}

addPromise(4,'a').then(function(result){
  console.log('Promise success', result);
}, function(err){
  console.log('Promise error', err);
})
