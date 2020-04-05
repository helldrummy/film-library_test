import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageService} from '../../../services/local-storage.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  formData: FormGroup;
  loginStatus: boolean;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl(),
      email: new FormControl()
    });
  }

  onSubmit() {
    this.loginStatus = this.localStorageService.checkUserInfo(this.formData.value.name);
    this.localStorageService.addUserInfo(this.formData.value.name, this.formData.value.email);
    this.activeModal.dismiss();
  }
}
