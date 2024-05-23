import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8a345bc8e904fc0fd24f9efa4fe55a6~c5_100x100.jpeg?lk3s=a5d48078&nonce=91467&refresh_token=61170aa02a753b4c269e89865df50a34&x-expires=1716649200&x-signature=9jyoXLvt03xVS2ciJFsaQhx7Xw0%3D&shp=a5d48078&shcp=b59d6b55"
        alt="Avatar"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Hoang Nhat Tan</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>closed742</span>
      </div>
    </div>
  );
}

export default AccountItem;
