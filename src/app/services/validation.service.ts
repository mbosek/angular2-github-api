export class ValidationService {

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPhone': 'Invalid phone number',
            'invalidPassword': 'Invalid password. Password must be at least 8 characters long, 1 numeric character, 1 lowercase letter, 1 uppercase, 1 special character.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidPostcode': 'Invalid postcode',
            'invalidVatNumber': 'Invalid VAT number'
        };

        return config[validatorName];
    }

    /**
     * Visa, MasterCard, American Express, Diners Club, Discover, JCB
     * @param control
     * @returns {any}
     */
    static creditCardValidator(control) {
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return {'invalidCreditCard': true};
        }
    }

    static emailValidator(control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return {'invalidEmailAddress': true};
        }
    }

    static passwordValidator(control) {
        if (control.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,40}$/)) {
            return null;
        } else {
            return {'invalidPassword': true};
        }
    }

    /**
     * UK:The postcodes are alphanumeric and between 6-8 characters long.
     * They are divided into two parts separated by a single space.
     * @param control
     * @returns {any}
     */
    static postcodeValidator(control) {
        if (control.value.match(/^(?=.*?[a-z])(?=.*?[ ]){1}(?=.*?[0-9]).{6,8}$/i)) {
            return null;
        } else {
            return {'invalidPostcode': true};
        }
    }

    /**
     * (123) 456-7890
     * 123-456-7890
     * 123.456.7890
     * 1234567890
     * +31636363634
     * 075-63546725
     * @param control
     * @returns {any}
     */
    static phoneValidator(control) {
        if (control.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            return null;
        } else {
            return {'invalidPhone': true};
        }
    }

    /**
     * (?xi)^(
     * (AT)?U[0-9]{8} |                              # Austria
     * (BE)?0[0-9]{9} |                              # Belgium
     * (BG)?[0-9]{9,10} |                            # Bulgaria
     * (HR)?[0-9]{11} |                              # Croatia
     * (CY)?[0-9]{8}L |                              # Cyprus
     * (CZ)?[0-9]{8,10} |                            # Czech Republic
     * (DE)?[0-9]{9} |                               # Germany
     * (DK)?[0-9]{8} |                               # Denmark
     * (EE)?[0-9]{9} |                               # Estonia
     * (EL|GR)?[0-9]{9} |                            # Greece
     * (ES)?[0-9A-Z][0-9]{7}[0-9A-Z] |               # Spain
     * (FI)?[0-9]{8} |                               # Finland
     * (FR)?[0-9A-Z]{2}[0-9]{9} |                    # France
     * (GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3}) | # United Kingdom
     * (HU)?[0-9]{8} |                               # Hungary
     * (IE)?[0-9]S[0-9]{5}L |                        # Ireland
     * (IT)?[0-9]{11} |                              # Italy
     * (LT)?([0-9]{9}|[0-9]{12}) |                   # Lithuania
     * (LU)?[0-9]{8} |                               # Luxembourg
     * (LV)?[0-9]{11} |                              # Latvia
     * (MT)?[0-9]{8} |                               # Malta
     * (NL)?[0-9]{9}B[0-9]{2} |                      # Netherlands
     * (PL)?[0-9]{10} |                              # Poland
     * (PT)?[0-9]{9} |                               # Portugal
     * (RO)?[0-9]{2,10} |                            # Romania
     * (SE)?[0-9]{12} |                              # Sweden
     * (SI)?[0-9]{8} |                               # Slovenia
     * (SK)?[0-9]{10}                                # Slovakia
     * )$
     * @param control
     * @returns {any}
     */
    static vatValidator(control) {
        if (control.value.match(/\b^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(HR)?[0-9]{11}|(CY)?[0-9]{8}L|(CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8} | (EE)?[0-9]{9} | (EL|GR)?[0-9]{9} | (ES)?[0-9A-Z][0-9]{7}[0-9A-Z] | (FI)?[0-9]{8} | (FR)?[0-9A-Z]{2}[0-9]{9} | (GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3}) | (HU)?[0-9]{8} | (IE)?[0-9]S[0-9]{5}L | (IT)?[0-9]{11} | (LT)?([0-9]{9}|[0-9]{12}) | (LU)?[0-9]{8} | (LV)?[0-9]{11} | (MT)?[0-9]{8} | (NL)?[0-9]{9}B[0-9]{2} | (PL)?[0-9]{10} | (PT)?[0-9]{9} | (RO)?[0-9]{2,10} | (SE)?[0-9]{12} | (SI)?[0-9]{8} | (SK)?[0-9]{10})$/i)) {
            return null;
        } else {
            return {'invalidVatNumber': true};
        }
    }
}
