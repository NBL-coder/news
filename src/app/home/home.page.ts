import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any;
  constructor(private authService: AuthService, private router: Router, public getdata: GetdataService) {}
  async logout()
  {
    await this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true});
  }
  ngOnInit(){
    this.getdata.doGet().subscribe(res =>{
      this.data = res.data.articles;
      console.log(this.data);
    });
  }
}
