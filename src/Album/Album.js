import React, { Component } from 'react';
import Photo1 from './images/1.png';
import Photo2 from './images/2.png';
import Photo3 from './images/3.png';
import Photo4 from './images/4.png';
import Photo5 from './images/5.png';
import Photo6 from './images/6.png';
import { Row, Image } from 'react-bootstrap';
import styled from 'styled-components'
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipeGallery } from 'react-photoswipe';

const Styles = styled.div`
  .pswp-thumbnail {
      display: inline-block;
      margin: 5px;
      padding: 5px;
  }
 `

export class Album extends Component {
    state = {
        isOpen: false,

        galleryItems: [
            {
                src: `${Photo1}`,
                thumbnail: `${Photo1}`,
                w: 1200,
                h: 900,
                title: 'Image 1'
            },
            {
                src: `${Photo2}`,
                thumbnail: `${Photo2}`,
                w: 1200,
                h: 900,
                title: 'Image 2'
            },
            {
                src: `${Photo3}`,
                thumbnail: `${Photo3}`,
                w: 1200,
                h: 900,
                title: 'Image 3'
            },
            {
                src: `${Photo4}`,
                thumbnail: `${Photo4}`,
                w: 1200,
                h: 900,
                title: 'Image 4'
            },
            {
                src: `${Photo5}`,
                thumbnail: `${Photo5}`,
                w: 1200,
                h: 900,
                title: 'Image 5'
            },
            {
                src: `${Photo6}`,
                thumbnail: `${Photo6}`,
                w: 1200,
                h: 900,
                title: 'Image 6'
            }

        ],
        options: {}
    };

    openPhotoSwipe = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: true,
            options: {
                closeOnScroll: false
            }
        });
    };

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };

    getThumbnailContent = (item) => {
        return (
            <Image src={item.thumbnail} width={300} height={300} />
        );
    };
    render() {
        return (
            <Styles>
                <div className='layout-page'>
                    <main className='layout-main'>
                        <div className='container'>
                            <Row className="justify-content-md-center">
                                <PhotoSwipeGallery items={this.state.galleryItems}
                                    thumbnailContent={this.getThumbnailContent} /></Row>
                        </div>
                    </main>
                </div >
            </Styles>
        );
    }
}



export default Album

