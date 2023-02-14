import styles from './styles.module.css';
import Image from 'next/legacy/image';
import Logo from '../../assets/images/headerlogo.svg';
import TeamSuccess from '../../assets/images/teamsuccess.svg';
import GoogleIcon from '../../assets/images/icons/googleicon.svg';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.wrapper}>
          <section>
            <div className={styles.top__shape}>
              <div></div>
            </div>
          </section>
          <section className={styles.box}>
            <div className={styles.box__childContainer}>
              <div>
                <a href="/">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={80}
                    height={50}
                    layout="fixed"
                  />
                </a>
              </div>
              <div className={styles.box__childBody}>
                <div className={styles.box__childMain}>
                  <div className={styles.caption}>
                    Raising Leaders with <span>Competence</span> and{' '}
                    <span>Character</span> for a bright future
                  </div>
                  <div className={styles.image}>
                    <Image
                      className={styles.rotate}
                      src={TeamSuccess}
                      alt="Logo"
                      // width={80}
                      // height={50}
                      // layout="fixed"
                    />
                  </div>
                </div>
                <div className={styles.accountFormBox}>
                  <form className={styles.form}>
                    <div className={styles.accountFormMain}>
                      <div className={styles.header}>
                        <span id="signin">
                          <Link href="/sign_in" legacyBehavior>
                            <a>Sign In</a>
                          </Link>
                        </span>

                        <span id="signup">
                          <Link href="/sign_up" legacyBehavior>
                            <a>Sign Up</a>
                          </Link>
                        </span>
                      </div>

                      <div className={styles.emailContainerSignIn}>
                        <input
                          className={styles.emailInput}
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className={styles.passwordContainerSignIn}>
                        <input
                          className={styles.passwordInput}
                          type="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className={styles.options}>
                        <div>
                          <input type="checkbox" name="savelogin" />
                          <label htmlFor="savelogin">Remember me</label>
                        </div>
                        <Link href="/forgotpassword" legacyBehavior>
                          <a>Recovery Password</a>
                        </Link>
                      </div>

                      <div className={styles.actionButtons}>
                        <div className={styles.submitContainer}>
                          <input type="submit" value="Let's go!" />
                        </div>
                        <div className={styles.signupButton}>
                          <Image
                            src={GoogleIcon}
                            width={20}
                            height={20}
                            alt=""
                            layout="fixed"
                          />
                          <span>Sign Up With Google</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.formFooter}>
                      <p>
                        By clicking the button above, you agree to our{' '}
                        <Link href="/terms" legacyBehavior>
                          <a>terms of use</a>
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" legacyBehavior>
                          <a>privacy policies</a>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.divider}>
              <div></div>
            </div>
          </section>
          <section>
            <div className={styles.bottom__shape}>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
