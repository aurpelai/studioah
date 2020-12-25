import React, { memo, useContext, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { StoreContext } from '../../context/StateProvider/StateProvider';
import { GlobalStyles } from '../../themes/studioah';
import { ComponentWithChildren } from '../../types/Component.types';
import { StyledContent } from './BasicLayout.styles';

const BasicLayout = ({ children }: ComponentWithChildren) => {
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    const handleMouseDownOnce = () => {
      dispatch({ type: 'CLEAR_TABBING_AROUND' });
      window.removeEventListener('mousedown', handleMouseDownOnce);
      window.addEventListener('keydown', handleTabKeyDownOnce);
    };

    const handleTabKeyDownOnce = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        dispatch({ type: 'SET_TABBING_AROUND' });
        window.removeEventListener('keydown', handleTabKeyDownOnce);
        window.addEventListener('mousedown', handleMouseDownOnce);
      }
    };

    window.addEventListener('keydown', handleTabKeyDownOnce);

    return () => {
      window.removeEventListener('keydown', handleTabKeyDownOnce);
      window.removeEventListener('mousedown', handleMouseDownOnce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledContent>
        {children}
      </StyledContent>
      <Footer />
    </>
  );
};

export default memo(BasicLayout);
