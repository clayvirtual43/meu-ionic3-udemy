import { Component, OnInit } from '@angular/core';
import { LIFECYCLE_DID_ENTER } from '@ionic/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nome_usuario:string  = "Clayton Prado da Silva";
  constructor() { }

  public somaDoisNumeros(num1:number, num2:number): void{
      //alert( num1 + num2);
  }
  ngOnInit() {
    this.somaDoisNumeros(10,99);
  }

  
  
}
 LIFECYCLE_DID_ENTER
  
 