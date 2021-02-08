import React from 'react';
import {
  DesktopButton,
  FooterContainer,
  PriceAndMailContent,
  PriceInfoBlock1,
  PriceInfoBlock2,
  SendMailBlock,
} from './FooterStyles';

const Footer = () => (
  <FooterContainer id="budget">
    <h1>We have ready-to-use telemedicine apps</h1>
    <PriceAndMailContent>
      <PriceInfoBlock1>
        <p>
          Templates from
          <span>$7 - 20k</span>
        </p>
      </PriceInfoBlock1>
      <PriceInfoBlock2>
        <p>
          Custom app
          <span>$13 - 27k</span>
        </p>
        <p>1,5 - 3 mon</p>
      </PriceInfoBlock2>
      <SendMailBlock>
        <p>
          Get a quote,
          <br />
          {' '}
          tell us about your project:
        </p>
        <DesktopButton><a href="mailto:hi@omisoft.net">hi@omisoft.net</a></DesktopButton>
      </SendMailBlock>
    </PriceAndMailContent>
  </FooterContainer>
);

export default Footer;
