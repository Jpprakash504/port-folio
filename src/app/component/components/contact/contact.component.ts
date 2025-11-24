import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatInputModule,
    MatFormFieldModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup; // ✅ use ! instead of initializing with empty FormGroup
  contactFormSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      remarks: ['', Validators.required],
    });
  }

  // ✅ Getters for template
  get name(): AbstractControl | null {
    return this.contactForm.get('name');
  }
  get subject(): AbstractControl | null {
    return this.contactForm.get('subject');
  }
  get email(): AbstractControl | null {
    return this.contactForm.get('email');
  }
  get remarks(): AbstractControl | null {
    return this.contactForm.get('remarks');
  }

  // ✅ Form submit
  async submit(contactForm: any) {
    this.contactFormSubmitted = true;

    if (!this.contactForm.valid) {
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to send this email now?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Send it!',
      cancelButtonText: 'Cancel'
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        // Call your delete API here
        const templateParams = {
          subject: contactForm.value.subject,
          from_name: contactForm.value.name,
          message: contactForm.value.remarks,
          email: contactForm.value.email,
        };
        // Send to user inbox
        await emailjs.send(
          'service_cycnc5a',
          'template_jvvsy4f', // <-- This template sends to YOU
          templateParams,
          'Q_9xY31dq-UXCa5lx'
        );

        Swal.fire(
          'Send !',
          'Your item has been Sent.',
          'success'
        )

        this.contactForm.reset();
      }
    });


    // try {
    //   const templateParams = {
    //     subject: contactForm.value.subject,
    //     from_name: contactForm.value.name,
    //     message: contactForm.value.remarks,
    //     email: contactForm.value.email,
    //   };

    //   // Send to user inbox
    //   await emailjs.send(
    //     'service_8hchd8h',
    //     'template_hfuydlo', // <-- This template sends to YOU
    //     templateParams,
    //     'v_Y00kaRhtILQc8Ew'
    //   );
    // } catch (err) {
    //   console.log('ERROR', err);
    // }
  }

  // ✅ Text only input
  textOnly(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
      return true;
    }
    event.preventDefault();
    return false;
  }
}
