alert("Bạn có muốn đăng ký tài khoản ?");// trước khi thoát
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {// thêm sự  kiện 
    e.preventDefault();//ngăn chặn xử lí đặc biệt của sự kiện 

    validateInputs();// kiem tra dữ liệu có hợp lệ hay không
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// Email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Sđt
function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}




const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phoneValue = phone.value.trim();
    if(usernameValue === '') {
        setError(username, 'Vui lòng nhập lại!');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Bắt buộc nhập');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email không hợp lệ, hãy thử lại!');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Mật khẩu bị lỗi');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Mật khẩu phải từ 8 kí tự')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Vui lòng xác nhận mật khẩu của bạn');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Mật khẩu của bạn không trùng khớp, hãy nhập lại!");
    } else {
        setSuccess(password2);
    }
    // ràng buộc số điện thoại
    if (phoneValue === '') {
        setError(phone, 'Số điện thoại không được để trống');
    } else if (! isPhone(phoneValue)) {
        setError(phone, 'Số điện thoại không đúng định dạng');
    } else {
        setSuccess(phone);
    }
};

