import {Icon} from 'antd';
import React, {Component} from 'react';

import {style} from './style';
import Button from '../../Button/index.js';

export default class Card extends Component {

    render () {
        return (
            <div style={style.box}>
                <div style={{position: 'relative'}}>
                    <Icon
                        style={style.icon}
                        type='check-circle-o'
                    />
                    <p style={style.paragraph}>
                        {'Take care of the environment'}
                    </p>
                </div>
                <div style={{position: 'relative'}}>
                    <Icon
                        style={style.icon}
                        type='check-circle-o'
                    />
                    <p style={style.paragraph}>
                        {'Improve the wellbeing of'}
                    </p>
                </div>
                <div style={{position: 'relative'}}>
                    <Icon
                        style={style.icon}
                        type='check-circle-o'
                    />
                    <p style={style.paragraph}>
                        {'Workers'}
                    </p>
                </div>
                <div style={{position: 'relative'}}>
                    <Icon
                        style={style.icon}
                        type='check-circle-o'
                    />
                    <p style={style.paragraph}>
                        {'Encourage exercise'}
                    </p>
                </div>
                <div style={{position: 'relative'}}>
                    <Icon
                        style={style.icon}
                        type='check-circle-o'
                    />
                    <p style={style.paragraph}>
                        {'Reduce the company\'s carbon footprint'}
                    </p>
                </div>
                <div style={style.button}>
                    <Button
                        onClick={() => {}}    
                        label='JOIN NOW'
                    />
                </div>
            </div>
        );
    }

}
