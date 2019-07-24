import * as React from 'react';
import { ToolboxGenericPanel } from './ToolboxGenericPanel';
import { Tile } from './toolboxTypes';

import '../../css/toolbox.css';

export class Toolbox extends React.Component<{ onChange: (tile: Tile) => void; }, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="toolbox" id="toolbox">
                <div>
                    <ToolboxGenericPanel onChange={this.props.onChange} SpriteType={"Terrains"} />
                    <ToolboxGenericPanel onChange={this.props.onChange} SpriteType={"Interactables"} />
                    <ToolboxGenericPanel onChange={this.props.onChange} SpriteType={"Items"} />
                    <ToolboxGenericPanel onChange={this.props.onChange} SpriteType={"Spawners"} />
                    <ToolboxGenericPanel onChange={this.props.onChange} SpriteType={"Areas"} />
                </div>
            </div>
        );
    }
}
