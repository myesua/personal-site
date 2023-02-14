import styles from './styles.module.css';
import Image from 'next/legacy/image';
import Logo from '../../assets/images/headerlogo.svg';
import TeamSuccess from '../../assets/images/teamsuccess.svg';
import GoogleIcon from '../../assets/images/icons/googleicon.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const SignUpPage = () => {
  // const [isSignIn, setIsSignIn] = useState(false);

  // const handleToggle = () => {
  //   setIsSignIn(!isSignIn);
  // };

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
                      <div className={styles.signupBox} id="signupbox">
                        <div className={styles.nameContainer}>
                          <div className={styles.name}>
                            <label htmlFor="fname">First Name</label>

                            <input
                              className={styles.textInput}
                              type="text"
                              required
                            />
                          </div>
                          <div className={styles.name}>
                            <label htmlFor="lname">Last Name</label>

                            <input
                              className={styles.textInput}
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className={styles.emailContainer}>
                          <label htmlFor="email">E-mail Address</label>

                          <input
                            className={styles.textInput}
                            type="email"
                            placeholder="info@youngrise.org"
                            required
                          />
                        </div>
                        <div className={styles.passwordContainer}>
                          <label htmlFor="password">Password</label>

                          <input
                            className={styles.textInput}
                            type="password"
                            required
                          />
                        </div>
                        <div className={styles.passwordComplexityChecker}>
                          <div className={styles.complexitymarkerContainer}>
                            <input type="radio" name="passwordcomplexity" />
                            <label htmlFor="passwordcomplexity">
                              Contains at least one uppercase
                            </label>
                          </div>
                          <div className={styles.complexitymarkerContainer}>
                            <input type="radio" name="passwordcomplexity" />
                            <label htmlFor="passwordcomplexity">
                              Contains at least one number
                            </label>
                          </div>
                          <div className={styles.complexitymarkerContainer}>
                            <input type="radio" name="passwordcomplexity" />
                            <label htmlFor="passwordcomplexity">
                              Contains at least one special character
                            </label>
                          </div>
                        </div>
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
                            layout="fixed"
                            alt=""
                          />
                          <span>Sign Up With Google</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.formFooter}>
                      <p>
                        By clicking the button above, you agree to our{' '}
                        <a href="/terms">terms of use</a> and{' '}
                        <a href="/privacy">privacy policies</a>
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

export default SignUpPage;
