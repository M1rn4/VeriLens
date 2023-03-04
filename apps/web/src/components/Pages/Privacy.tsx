import MetaTags from '@components/Common/MetaTags';
import Footer from '@components/Shared/Footer';
import { Mixpanel } from '@lib/mixpanel';
import { t, Trans } from '@lingui/macro';
import { APP_NAME } from 'data/constants';
import type { FC } from 'react';
import { useEffect } from 'react';
import { PAGEVIEW } from 'src/tracking';

const Privacy: FC = () => {
  useEffect(() => {
    Mixpanel.track(PAGEVIEW, { page: 'privacy' });
  }, []);

  const updatedAt = 'December 11, 2022';

  return (
    <>
      <MetaTags title={t`Privacy Policy • ${APP_NAME}`} />
      <div className="bg-brand-400 flex h-48 w-full items-center justify-center">
        <div className="relative text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Privacy Policy</h1>
          <div className="mt-4 flex justify-center">
            <div className="rounded-md bg-gray-800 py-0.5 px-2 text-xs text-white">
              <Trans>Updated {updatedAt}</Trans>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <div className="max-w-3/4 relative mx-auto rounded-lg sm:w-2/4">
            <div className="lt-text-gray-500 max-w-none !p-8">
              {/* 1. Overview beings */}
              <div className="mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>1. Overview</Trans>
              </div>
              <div className="space-y-5 leading-7">
                <p>
                  <Trans>
                    By accessing the Site, you agree to not only this Privacy Policy, but also to our Terms of
                    Use and any other written agreements for using the Site. And you agree to our collection
                    and use of any personal data (as described here) as well as the features of
                    public/permissionless blockchain technology.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    This Privacy Policy (the “Privacy Policy”) provides a comprehensive description of how
                    VerifiedChain (“we,” “our,” or “us”) collects, uses, and shares information about you in
                    connection with the website at Verified.xyz”, as well as your rights and choices regarding
                    such information.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    By accessing or using the Site, you accept and assume certain inherent features related to
                    engaging in recording the data on the blockchain. Interactions with the Lens Protocol rely
                    on smart contracts stored on a publicly available blockchain, cryptographic tokens
                    generated by the smart contracts, and other nascent software, applications and systems
                    that interact with blockchain-based networks. One of the defining features of blockchain
                    technology is that its entries are immutable, which means, as a technical matter, they
                    generally cannot be deleted or modified by anyone. If you are not comfortable assuming the
                    inherently immutable and public nature of all entries on the blockchain, you should not
                    engage with our Site.
                  </Trans>
                </p>
              </div>
              {/* 1. Overview ends */}
              {/* 2. Information Collection beings */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>2. Information Collection</Trans>
              </div>
              <div className="space-y-5 leading-7">
                <p>
                  <Trans>We may collect the following information about you when you use the Site:</Trans>
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    <Trans>Information you provide such as feedback, question and issues reports.</Trans>
                  </li>
                </ul>
                <p>
                  <Trans>
                    You may choose to voluntarily provide other information to us that we have not solicited
                    from you, and, in such instances, you are solely responsible for such information.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    We may use tracking technologies to automatically collect information including the
                    following:
                  </Trans>
                </p>
                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <Trans>
                      <b>Log Files</b>, to record events or errors that occur when using our Site.
                    </Trans>
                  </li>
                  <li>
                    <Trans>
                      <b>Cookies</b>, small data stored on your device that are necessary for you to browse
                      the Site.
                    </Trans>
                  </li>
                  <li>
                    <Trans>
                      <b>Public Information</b>, data from activity that is publicly visible and/or accessible
                      on blockchains. This may include blockchain addresses and information regarding the NFTs
                      in wallets.
                    </Trans>
                  </li>
                </ul>
              </div>
              {/* 2. Information Collection ends */}
              {/* 3. Use of Information begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>3. Use of Information</Trans>
              </div>
              <p className="leading-7">
                <Trans>
                  We may need to use it to operate and manage the Services on this Site (or other places),
                  provide you support, ensure we comply with laws and regulation, and enforce the security of
                  the Site or make other improvements.
                </Trans>
              </p>
              {/* 3. Use of Information ends */}
              {/* 4. Third-Parties begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>4. Third-Parties</Trans>
              </div>
              <p className="leading-7">
                <Trans>
                  This Privacy Policy does not apply to websites, apps, products, or services that we do not
                  own or control. For example, your interactions with Ethereum wallet are governed by the
                  applicable privacy policies of that particular wallet.
                </Trans>
              </p>
              {/* 4. Third-Parties ends */}
              {/* 5. Analytics begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>5. Analytics</Trans>
              </div>
              <div className="space-y-5 leading-7">
                <p>
                  <Trans>
                    We use <b>Datadog</b> to collect various events from user actions to analyse and make
                    decisions for Site improvements.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    All the data are anonymous and we don’t track user details such as name, handle, email,
                    wallet address and so on.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    We may change to other third-party analytics service provider. The Privacy Policy of
                    Analytics subjects to the every provider. You should review everything before using the
                    Site.
                  </Trans>
                </p>
              </div>
              {/* 5. Analytics ends */}
              {/* 6. Your Rights and Choices begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>6. Your Rights and Choices</Trans>
              </div>
              <div className="space-y-5 leading-7">
                <p>
                  <Trans>We may collect the following information about you when you use the Site:</Trans>
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <Trans>
                      <b>Cookies</b>. We will only use strictly necessary cookies. These cookies are essential
                      for you to browse the Site and use its features, including accessing secure areas of the
                      Site.
                    </Trans>
                  </li>
                  <li className="linkify">
                    <Trans>
                      <b>Do Not Track</b>. Your browser settings may allow you to automatically transmit a “Do
                      Not Track” signal to the online services you visit. Note, however, there is no industry
                      consensus as to what Site and app operators should do with regard to these signals.
                      Accordingly, unless and until the law is interpreted to require us to do so, we do not
                      monitor or take action with respect to “Do Not Track” signals. For more information on
                      “Do Not Track,” visit{' '}
                      <a href="https://allaboutdnt.com" target="_blank" rel="noreferrer">
                        https://allaboutdnt.com
                      </a>
                      .
                    </Trans>
                  </li>
                </ul>
              </div>
              {/* 6. Your Rights and Choices ends */}
              {/* 7. Data Security begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>7. Data Security</Trans>
              </div>
              <p className="leading-7">
                <Trans>
                  We implement and maintain reasonable administrative, physical, and technical security
                  safeguards to help protect information about you from loss, theft, misuse, unauthorised
                  access, disclosure, alteration, and destruction. Nevertheless, transmission via the internet
                  is not completely secure and we cannot guarantee the security of information about you.
                </Trans>
              </p>
              {/* 7. Data Security ends */}
              {/* 8. Children begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>8. Children</Trans>
              </div>
              <p className="leading-7">
                <Trans>
                  The Site is intended for general audiences and are not directed at children. To use the
                  Site, you must legally be able to enter into the Agreement. We do not knowingly collect
                  personal information from children.
                </Trans>
              </p>
              {/* 8. Children ends */}
              {/* 9. Changes to Policy begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>9. Changes to Policy</Trans>
              </div>
              <p className="leading-7">
                <Trans>
                  We reserve the right to revise and reissue this Privacy Policy at any time. Any changes will
                  be effective immediately upon our posting of the revised Privacy Policy. For the avoidance
                  of doubt, your continued use of the Site indicates your consent to the revised Privacy
                  Policy then posted.
                </Trans>
              </p>
              {/* 9. Changes to Policy ends */}
              {/* 10. Contact begins */}
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <Trans>10. Contact</Trans>
              </div>
              <p className="leading-7">
                <Trans>
                  If you have any questions or comments about this Privacy Policy, our data practices, or our
                  compliance with applicable law, please contact us at privacy@lenster.xyz
                </Trans>
              </p>
              {/* 10. Contact ends */}
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2 pb-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Privacy;