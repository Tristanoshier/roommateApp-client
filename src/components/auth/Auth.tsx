import React, { useState } from 'react';
import { AuthDisplay } from './AuthDisplay';

type Props = {
    updateToken: (newToken: string) => void;
};

const Auth = (props: Props) => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            <AuthDisplay updateToken={props.updateToken} isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
    );
};

export default Auth;