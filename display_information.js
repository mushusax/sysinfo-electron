const os = require('os');

//Toggle active menu item
let menu_container = document.getElementById('menu');
let items = menu_container.getElementsByTagName('a');
for(let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function(){
    let current = document.getElementsByClassName('active'); 
    current[0].className = current[0].className.replace('active', '');
    this.className += 'active';
  });
}


//CPU information
os.cpus().forEach(function(cpu){
  //cpu information
  let info = [`model: ${cpu.model}`, `speed: ${cpu.speed}MHz`, `user: ${cpu.times.user}ms`, `nice: ${cpu.times.nice}ms`, 
    `sys: ${cpu.times.sys}ms`, `idle: ${cpu.times.idle}ms`];

  let ul = document.createElement('ul');
  for(let i = 0; i < 6; i++) {
    var li = document.createElement('li');
    li.innerHTML = info[i];
    ul.appendChild(li);
  }
  let div = document.createElement('div');
  div.className = 'vertical-info';
  div.appendChild(ul);
  document.body.appendChild(div);
});
  

/*let cpu = os.cpus()[0];
let info = [cpu.model, cpu.speed, cpu.times.user, cpu.times.nice, cpu.times.sys, cpu.times.idle];
let li = document.createElement('li');
li.innerHTML = cpu.model;
let ul = document.createElement('ul');
ul.appendChild(li);
let div = document.createElement('div');
div.className = 'vertical-info';
div.appendChild(ul);
document.body.appendChild(div);*/
