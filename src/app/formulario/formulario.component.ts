import { Component, VERSION , Input} from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


    datos={
      nombre: '',
      ci: '',
      correo: '',
      celular: ''
    }

    entrega={
      dir1: '',
      ciudad: '',
      nro: ''
    }

    order={
      product: '',
      //price: this.calcPrice()
    }

    precio={
      price: this.calcPrice(),
      desc: ''
    }

    motoModel(): string{
      let ans=this.order.product;
      if(ans=='p1') ans='Motocicleta a100-1';
      else if(ans=='p2') ans='Motocicleta b100-1';
      else if(ans=='p3') ans='Motocicleta c100-1';
      else if(ans=='p4') ans='Motocicleta d100-1';
      else if(ans=='p5') ans='Motocicleta a200-1';
      else if(ans=='p6') ans='Motocicleta b200-1';
      else if(ans=='p7') ans='Motocicleta c200-1';
      else if(ans=='p8') ans='Motocicleta d200-1';
      else if(ans=='p9') ans='Motocicleta a300-1';
      else if(ans=='p10') ans='Casco c99-0';
      else if(ans=='p11') ans='Casco c99-10';
      else if(ans=='p12') ans='Casco c99-110';

      return ans;
    }

    calcPrice(): any{
      let ans=this.order.product;
      let ans2=0;
      if(ans=='p1') ans2=1999.99;
      else if(ans=='p2') ans2=1299.99;
      else if(ans=='p3') ans2=1799.99;
      else if(ans=='p4') ans2=2599.99;
      else if(ans=='p5') ans2=999.99;
      else if(ans=='p6') ans2=899.99;
      else if(ans=='p7') ans2=999.99;
      else if(ans=='p8') ans2=799.99;
      else if(ans=='p9') ans2=999.99;
      else if(ans=='p10') ans2=199.99;
      else if(ans=='p11') ans2=99.99;
      else if(ans=='p12') ans2=79.99;

      return ans2;
    }
    
    calcDesc(): any{
      let ans=this.order.product;
      let ans2=10;
      if(ans=='p1' || ans=='p2'|| ans=='p3' || ans=='p4') ans2=15;

      return ans2;
    }

    calcTotal(): any{
      let precio=this.calcPrice();
      let desc=this.calcDesc();

      return Math.round((precio-precio*(desc/100))*100)/100;
    }



}
