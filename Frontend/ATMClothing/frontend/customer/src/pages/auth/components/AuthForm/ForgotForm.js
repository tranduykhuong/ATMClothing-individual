import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';

const ForgotForm = () => {
  const StepPhone = (
    <>
      <InputCT placeholder="Nhập số điện thoại" />

      <div className={classes.btn}>
        <ButtonCT primary borderRadius content="Tiếp tục" medium />
      </div>
    </>
  );

  const StepOTP = (
    <>
      <p className={classes.notice}>Chúng tôi đã gửi mã OTP vào số điện thoại của bạn</p>
      <InputCT placeholder="Nhập OTP" />
      <p className={classes.messageOTP}>
        Bạn không nhận được mã OTP?
        {' '}
        <span>Gửi lại</span>
        {' '}
        <span>
          sau
          {' '}
          <span className={classes.messageOTP__time}>1:59s</span>
        </span>
      </p>

      <div className={classes.btn}>
        <ButtonCT primary borderRadius content="Xác nhận" medium />
      </div>
    </>
  );

  const StepPassword = (
    <>
      <InputCT placeholder="Nhập mật khẩu mới" type="password" />
      <InputCT placeholder="Nhập lại mật khẩu" type="password" />

      <div className={classes.btn}>
        <ButtonCT primary borderRadius content="Cập nhật" medium />
      </div>
    </>
  );

  return (
    <div className={classes['auth-form']}>
      <div className={classes['auth-form__form']}>
        <h3>Quên mật khẩu</h3>
        {StepPhone}
      </div>

      <div className={classes['auth-form__footer']}>
        <SocialLogin />
        <p>
          Bạn đã có tài khoản?
          {' '}
          <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotForm;
