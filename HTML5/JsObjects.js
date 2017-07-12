function reverse()
{
	
	var Obj ={ x:"ranjith", y:"kumar", z:function(){return this.x;} };
	
	var getset ={a:5 , 
				get b(){ 
				return this.a+1;
				} , 
				set b(x){ 
				this.b=x; } 
				}
	
	console.log(getset.a);
	console.log(getset.b);
	getset.b=50;
	console.log(getset.b);
	
	function Car(make, model, year)
	{
		this.make=make;
		this.model=model;
		this.year=year;
		this.jj="hi";
	}
	
	var car=[];
	
	var c1= new Car("HYUNDAI",2017,2018);
	var c2= new Car("Volks Vagon",2017,2019);
	var obj = Object.create(Obj);
	obj.x="RAN";
	console.log(obj.z());
	
	console.log(c2.year.name);
	
/*	var y ='2';
	var k=[];
	
	var sampleObject = new Object();
	
	sampleObject.x=1;
	sampleObject.y;
	sampleObject.z='3';
	
*/	
	console.log(Object.getOwnPropertyNames(c1));
	
	
	for (o in obj)
	{
	console.log(obj[o]);
	}
}