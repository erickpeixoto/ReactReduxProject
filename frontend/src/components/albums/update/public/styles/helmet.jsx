import React, { Component } from 'react'
import Helmet from 'react-helmet'
class StyleHelmet extends Component {
    render() {
        return (
            <Helmet
                style={[{
                    "cssText": `
                             
                            .box-pagination{
                                float: right;
                                position: relative !important;
                                top: 14px !important;
                           } 
                           .pagination li.active {
                                background-color: #49bfe1;
                                border-radius: 50%;
                                height: 30px;
                                width: 30px;
                                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 2px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
                            }
                            .pagination li a {
                                font-size: 15px;
                            }
                                .item {
                                    background: white !important;
                                    box-shadow: rgba(0, 0, 0, 0) 0px 3px 2px, rgba(0, 0, 0, 0.08) 0px 6px 18px !important;
                                    border: 1px solid #e6e6e68a;
                                }
                                .item .type{
                                        color: #18c3d0;
                                        background: #8ce8fb26;
                                        padding: 11px;
                                        font-size: 10px;
                                        position: relative;
                                        top: -4px;
                                        left: -11px;
                                }
                                .item .count,
                                .sum button {
                                       margin-top: 14px;
                                       padding: 10px 0px 10px 10px;
                                }
                                .item .count svg{
                                        color: #b0cbd2 !important;
                                        height: 17px !important;
                                        width: 17px !important;
                                }
                                .item .sum{
                                    color: #385882;
                                    font-size: 12px;
                                    font-weight: bold;
                                    position: relative;
                                    top: -1px;
                                    left: 9px;
                                }
                                .item button.delete {
                                    width: 47px;
                                    padding: 2px 7px 0px 0px;
                                    background: #c5c5c5;
                                    position: relative;
                                    top: -3px;
                                    left: 3px;
                                    margin-right: 5px;
                                    top: -5px;
                                    left: 19px;
                                    margin-right: 5px;
                                }
                                .item button.delete:hover {
                                    width: 47px;
                                    padding: 2px 7px 0px 0px;
                                    background: #db6a64;
                                    position: relative;
                                    top: -5px;
                                    left: 19px;
                                    margin-right: 5px;
                                }
                                .item button.check {
                                        background: #5fcac7;
                                        position: relative;
                                        top: -7px;
                                        float: right;
                                        left: 9px;
                                    }
                                 .item button.update {
                                        width: 47px;
                                        padding: 2px 7px 31px 2px;
                                        background: #c5c5c5;
                                        position: relative;
                                        top: -5px;
                                        left: 19px;
                                        margin-right: 5px;

                                }
                                .item button.update:hover {
                                    width: 47px;
                                     padding: 2px 7px 31px 2px;
                                     background: #fcbd53bf;
                                     position: relative;
                                     top: -5px;
                                     left: 19px;
                                     margin-right: 5px;

                             }
                                .item button svg {
                                    color: white !important;
                                    position: relative;
                                    top: 4px;
                                    right: -5px;
                                }
                                .item .sum.preposition{
                                    margin: 5px !important;
                                }
                                .box-list-plans{
                                    margin-top: 20px;
                                }
                               .search svg{
                                    color: rgb(147, 168, 233) !important;
                                    position: relative;
                                    top: 10px;
                                    left: -5px;
                                }
                                .item .title{
                                    font-size: 10px !important;
                                }
                                .row {
                                    margin-bottom: 6px;
                                }
                                .button-confirm {
                                    outline: none;
                                    background: #333;
                                    border: none;
                                    display: inline-block;
                                    padding: 6px 18px;
                                    color: #eee;
                                    margin-left: 10px;
                                    border-radius: 5px;
                                    font-size: 12px;
                                    cursor: pointer;
                                }
                                .button-recuse{
                                    outline: none;
                                    background: #999;
                                    border: none;
                                    display: inline-block;
                                    padding: 6px 18px;
                                    color: #eee;
                                    margin-right: -1px;
                                    border-radius: 5px;
                                    font-size: 12px;
                                    cursor: pointer;
                                    margin-left: 10px;
                                }
                                .react-confirm-alert-overlay {
                                    position: fixed;
                                    top: 15px;
                                    left: 15px;
                                    right: 14px;
                                    bottom: 0;
                                    z-index: 1000;
                                    }
                                    .add-user {
                                        width: 20px;
                                        padding-left: 8px;
                                        padding-right: 47px;
                                        padding-bottom: 29px !important;
                                        background: #5fcac7;
                                        position: relative;
                                        left: -167px;
                                        top: 17px;
                                        z-index: 999;
                                    }
                                     .label-test {
                                        background-color: #5fcac7 !important;
                                        padding: 4px;
                                        color: white;
                                        border-radius: 4px;
                                    }
                                     .label-consult {
                                        background-color: #f5cb81 !important;
                                        padding: 4px;
                                        color: white;
                                        border-radius: 4px;
                                    }
                                    
                                    .label-license {
                                        background-color: #db6a64 !important;
                                        padding: 4px;
                                        color: white;
                                        border-radius: 4px;
                                    }
                                     .label-period {
                                        background-color: #c5c5c5 !important;
                                        padding: 4px;
                                        color: white;
                                        border-radius: 4px;
                                    }
                                    .label-date {
                                        background-color: #ffffff !important;
                                        padding: 4px;
                                        color: #47648a;
                                        border-radius: 4px;
                                        margin-left: 8px;
                                        border: 1px solid #47648a63;
                                        text-align: center;
                                        font-size: 14px !important;

                                    }
                                    .label-date svg {
                                        color: #466389 !important;
                                        height: 16px !important;
                                        width: 16px !important;
                                        position: relative;
                                        top: 3px;
                                        margin-right: 5px;
                                    }
                                    .item-comp {
                                        margin-top: 14px;
                                    }
                                    .container-companies-legend{
                                        margin-top: 57px;
                                    }
                                       .critic-label{
                                        background: #ff9d9d;
                                        padding: 3px 17px 0px 3px;
                                        border-radius: 4px;
                                        position: relative;
                                        left: -25px;

                                    }

                                  .moderate-label{
                                        background: #eca666;
                                        padding: 3px 17px 0px 3px;
                                        border-radius: 4px;
                                    

                                    }

                                    .easy-label{
                                        background: #69c56c;
                                        padding: 3px 17px 0px 3px;
                                        border-radius: 4px;
                                        position: relative;
                                        left: -10px;
                                    }
                                     .text-level {
                                        font-size: 13px;
                                        margin-left: 7px;
                                        font-weight: bold;
                                    }
                                   .container-companies-title {
                                        margin-bottom: 10px;
                                    }
                                    .number-of-recordes{
                                        margin-top: 33px;
                                        font-weight: bold;
                                        color: gray;
                                    }
                                    
                                    .item-logo svg {
                                        color: rgba(109, 132, 163, 0.67) !important;
                                        height: 42px !important;
                                        width: 42px !important;
                                    }
                                     .item-logo {
                                            position: relative;
                                            top: 5px;
                                            left: -6px;
                                        }
                                     .add-user {
                                        width: 20px;
                                        padding-left: 8px;
                                        padding-right: 47px;
                                        padding-bottom: 29px !important;
                                        background: #5fcac7;
                                        position: relative;
                                        left: unset !important;
                                        top: 17px;
                                        z-index: 999;
                                }
                                .pagination li.active a {
                                    color: #fff !important;
                                }

                                .item button.option {
                                    padding: 2px 19px 33px 26px;
                                    background: #1bafd0;
                                    position: relative;
                                    top: -7px;
                                    float: right;
                                    left: 9px;
                                }
                                .name-selected {
                                    font-weight: bold;
                                    color: #db6a64;
                                }
                                .doctor-active svg {
                                    fill: #1a5c87 !important;
                                }
                                .doctor-active{
                                       background: #f3f5f8 !important;
                                       border-bottom: 3px #43d3ed solid !important;
                                }
                                .doctor-active div {
                                    color: #1a5c87 !important;
                                }
                                .react-autosuggest__suggestions-container{
                                    font-size: 10px !important;
                                    width: 100% !important;
                                }
                                .box-clinics{
                                    margin-top: 20px !important;
                                }
                                .label-admin{
                                    background: #25bf83;
                                    padding: 5px;
                                    color: white;
                                    position: relative;
                                    top: 3px;
                                    border-radius: 2px;
                                }
                                .item .update-album{
                                    padding: 5px 12px 13px 5px;
                                    background: #fcbd53bf;
                                    position: relative;
                                    top: -5px;
                                    margin-right: 5px;
                                }
                                  .item .delete-album{
                                    padding: 5px 12px 13px 5px;
                                    background: #f4433663;
                                    position: relative;
                                    top: -5px;
                                    margin-right: 15px;
                                }
                                .containerForm div div:first-of-type{
                                    width: 700px !important;
                                }
                                .list-albums{

                                    background: white !important;
                                    padding: 20px
                                }
                        `
                }]}
            />
        )
    }
}

export default StyleHelmet
