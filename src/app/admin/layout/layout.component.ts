import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //add this to add product
//   readURL(input) {
//     if(input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             $('#out_img').attr('src', e.target.result);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }

//   $('#in_img').change(function() {
//     readURL(this);
// });

}
