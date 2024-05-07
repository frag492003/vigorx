import { FormControl } from "@angular/forms";

export class product {
    find(arg0: (userData: any) => boolean) {
      throw new Error('Method not implemented.');
    }

    id !: number;
    title !: string;
    description !: string;
    category !: string;
    price !: number;

}
export function egyptianPhoneNumberValidator(control: FormControl): { [key: string]: any } | null {
  const phoneNumber = control.value as string;
  const isValidFormat = phoneNumber.startsWith('+20') && phoneNumber.length == 13;
  // const isValidNumeric = /^\d$/.test(phoneNumber); // Check if phone number consists of only digits

  return isValidFormat  ? null : { 'egyptianPhoneNumber': true };
}

export function minPriceValidator(minPrice: number) {
  return (control: FormControl): { [key: string]: any } | null => {
    const value = control.value;
    if (isNaN(value) || value < minPrice) {
      return { 'minPrice': true };
    }
    return null;
  };
}