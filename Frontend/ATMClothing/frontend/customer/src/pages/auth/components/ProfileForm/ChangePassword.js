import React from 'react';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';

const ChangePassword = () => {
  const a = 0;
  return (
    <>
      <div className={classes.profileForm}>
        <div className={classes.profileForm__title}>
          <p>Mật khẩu cũ</p>
          <p>Mật khẩu mới</p>
          <p>Xác nhận mật khẩu</p>
        </div>

        <div className={classes.profileForm__input}>
          <div className={classes['profileForm__input-oldPW']}>
            <input type="password" placeholder="Nhập mật khẩu cũ" />
            <p>Quên mật khẩu</p>
          </div>
          <input type="password" placeholder="Nhập mật khẩu mới" />
          <input type="password" placeholder="Nhập lại mật khẩu mới" />
        </div>
      </div>
    <div className={classes.btn}><ButtonCT content="Lưu thay đổi" primary medium /></div>
    </>
  );
};

export default ChangePassword;
