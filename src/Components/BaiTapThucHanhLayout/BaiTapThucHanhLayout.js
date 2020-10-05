import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3Content from './BT3Content'
import BT3Footer from './BT3Footer'
import BT3SideBar from './BT3SideBar'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div className="BaiTapThucHanh">
                <BT3Header />
                <div className="row">
                    <div className="col-3">
                        <BT3SideBar />
                    </div>
                    <div className="col-6">
                        <BT3Content />
                    </div>
                </div>
                <BT3Footer />
            </div>
        )
    }
}
