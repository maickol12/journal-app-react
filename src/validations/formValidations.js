
export const required = value => {
    return value ? undefined : 'Required field';
}

export const emptyField = value => ( 
    (String(value).trim().length)? undefined: 'Empty Field'
)

export const emailValidation = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())? undefined: 'Email invalid'; 
}