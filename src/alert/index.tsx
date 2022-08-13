// 源文件
import React from 'react';
import t from 'prop-types'

export interface AlertProps{
    kind?:'info'|'positive'|'negative'|'warning'
}

export type KindMap = Record<Required<AlertProps>['kind'],string>
const prefixCls='happy-alert'

const kinds:KindMap={
    info:'',
    positive:'',
    negative:'',
    warning:''
}

const Alert: React.FC<AlertProps>=({children, kind="info",...rest})=>(
    <div
        className={prefixCls}
        style={{background:kinds[kind]}}
        {...rest}
    >
        {children}
    </div>
)

Alert.propTypes={
    kind:t.oneOf(['info','positive','negative','warning'])
}

export default Alert