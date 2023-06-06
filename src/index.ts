class test{
  

  constructor(private param: number) {
    this.param = param;
  }

  get getParam():number {return this.param;}

}


const obj = new test(69);

const body = document.querySelector('body');
const title = document.createElement('h1');
title.textContent = `testParam = ${obj.getParam}`;
body.appendChild(title);