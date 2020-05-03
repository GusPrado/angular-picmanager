import { ValidatorFn, FormGroup } from "@angular/forms";


export const userNamePasswd: ValidatorFn = (formGroup: FormGroup) => {

  const userName = formGroup.get('userName').value
  const password = formGroup.get('password').value

  if (userName.trim() + password.trim()) {

    return userName != password
      ? null
      : { userNamePasswd: true}
  } else {
    return null
  }
}
