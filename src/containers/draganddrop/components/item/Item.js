import React from 'react'
import styles from './draganddropitem.module.scss'
import inputIcon from '../../../../resources/inputIcon.png'
import outputIcon from '../../../../resources/outputIcon.png'
import inputIconActive from '../../../../resources/inputIconActive.png'
import outputIconActive from '../../../../resources/outputIconActive.png'
import classnames from 'classnames'
import { PortWidget } from '@projectstorm/react-diagrams'

export const Item = ({id, title, output, active, onDesc, engine, node, ref, color, selectItem}) => {

    return (
        <div className={classnames(styles.drag_and_drop_item, onDesc ? styles.on_desc : (active && styles.active))} ref={ref} onClick={() => {
                console.log("click")
                console.log(selectItem)
                selectItem && selectItem(title)
        }
            }>
            {node && <PortWidget className={styles.start_dot} engine={engine} port={node.getPort('in')} />}
            {!node && <div className={styles.start_dot} />}
            {node && <PortWidget className={styles.end_dot} engine={engine} port={node.getPort('out')} />}
            {!node && <div className={styles.end_dot} />}
            <div className={classnames(styles.item_body, output && styles.output)}>
                {!output && <img 
                    className={styles.item_icon_input} 
                    src={active ? inputIconActive : inputIcon}
                    alt=""
                />}
                <p className={output ? styles.item_title_output : styles.item_title_input} style={{color: color}}>{title}</p>
                {output && <img 
                    className={output ? (styles.item_icon_output) : styles.item_icon_input} 
                    src={active ? outputIconActive : outputIcon}
                    alt=""
                />}
            </div>
            <div className={output ? styles.divider_output : styles.divider_input} />
        </div>
    )

}