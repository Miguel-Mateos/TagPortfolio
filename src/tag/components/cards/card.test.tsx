import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import Card, { 
    ICardProps, 
    CardBody, 
    CardFloatButtons,
    CardFooter, 
    CardHeader, 
    CardImg, 
    CardTop } from './card';
import FigureCard, {
    FigureCardBody,
    FigureCardFigure,
    FigureCardFloatIcon,
    FigureCardHeader,
    IFigureCardProps,
} from './figureCard';
import MasonryCard, {
    MasonryCardImg,
    MasonryCardTop,
    MasonryCardHeader,
    MasonryCardBody,
    IMasonryCardProps,
} from './masonryCard';
import TeaserCard, {
    ITeaserCardProps,
    TeaserCardImg,
    TeaserCardTop,
    TeaserCardHeader,
    TeaserCardBody,
    TeaserCardFooter,
} from './teaserCard';
import LocationMapCard, {
    ILocationMapCardProps,
    LocationMapCardBody,
    LocationMapCardHeader,
    LocationMapCardMap,
    LocationMapCardTop,
} from './locationMapCard';
import IconCard, {
    IconCardIcon, 
    IconCardHeader, 
    IconCardBody, 
    IconCardFooter
} from './iconCard';
import {ICardIconProps} from '../cards/cardIcon';
import {DragAndDropCard, DragAndDropCardHeader} from '../cards/dragAndDropCard';

const cardExample = (props?: ICardProps) => (
    <Card {...props} className="tag-ds">
        <CardImg>
            <img
            src="https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg?w=2000"
            alt="img-top"
            />
        </CardImg>
        <CardFloatButtons>
            <button className="button-card-icon">
                <span className="material-icons">more_vert</span>
            </button>
        </CardFloatButtons>
        <CardTop>
            <div className="status-tag_success">semantic</div>
            <span className="tag">{"06 SEP 2022"}</span>
        </CardTop>
        <CardHeader>
            <img
            className="avatar_big"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJnPEjXsq9Pon-z_hzb56i-_qXsSPddCxmA&usqp=CAU"
            alt=""
            />
            <h4>This is a title</h4>
            <span className="subtitle">And this is a subtitle</span>
        </CardHeader>
        <CardBody>
            <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus illum nam est necessitatibus
            voluptatibus quam quae iusto ea consequuntur dolores saepe rem porro quasi, quis optio dolor consequatur
            perferendis voluptates temporibus corrupti veritatis error ipsa. Perspiciatis et voluptate totam magni vel magnam
            debitis est rem quisquam, ipsum, placeat culpa?
            </span>
            <ul className="list-icon_small">
                <li className="item-double">
                    <span className="material-icons icon-order">alternate_email</span>
                    Email <span>adecco@adecco.com</span>
                </li>
                <li className="item-double">
                    <span className="material-icons icon-order">phone</span>
                    Phone <span>000 000 000</span>
                </li>
                <li className="item-double">
                    <span className="material-icons icon-order">link</span>
                    Links
                    <span>
                        <a className="small" href="">
                            Linkedin
                        </a>{' '}
                        |{' '}
                        <a className="small" href="">
                            Gmail
                        </a>{' '}
                        |{' '}
                        <a className="small" href="">
                            CV
                        </a>
                    </span>
                </li>
                <li className="item-double">
                    <span className="material-icons icon-order">schedule</span>
                        Period <span>08:30 / 18:30</span>
                </li>
            </ul>
        </CardBody>
        <CardFooter>
            <a href="">link</a>
            <button>My button text</button>
        </CardFooter>
    </Card>
);

const FigureCardExample = (props?: IFigureCardProps) => (
    <FigureCard {...props} className="tag-ds">
        <FigureCardFigure>00</FigureCardFigure>
        <FigureCardFloatIcon>
            <span className="material-icons">collections</span>
        </FigureCardFloatIcon>
        <FigureCardHeader>
            <h4>This is a title</h4>
        </FigureCardHeader>
        <FigureCardBody>This is a Figure in horizontal disposition</FigureCardBody>
    </FigureCard>
);

const MasonryCardExample = (props?: IMasonryCardProps) => (
    <MasonryCard {...props} className="tag-ds">
        <MasonryCardImg>
            <img src="https://i.pinimg.com/736x/ee/be/fb/eebefb37815a1346e8cb4f3db608e1b1.jpg" alt="img-background" />
        </MasonryCardImg>
        <MasonryCardTop>
            <div className="status-tag_success">semantic</div>
            <button className="button-card-icon">
            <span className="material-icons">more_vert</span>
            </button>
            <button className="button-card-icon">
            <span className="material-icons">favorite_border</span>
            </button>
        </MasonryCardTop>
        <MasonryCardHeader>
            <h4>This is a title</h4>
        </MasonryCardHeader>
        <MasonryCardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea voluptates, facilis dolore dignissimos eum
            accusamus vitae accusantium dolores veritatis maiores deserunt unde natus similique omnis sit quaerat! At,
            asperiores.
        </MasonryCardBody>
    </MasonryCard>
);

const TeaserCardExample = (props?: ITeaserCardProps) => (
    <TeaserCard {...props} className="tag-ds">
        <TeaserCardImg>
            <img
            src="https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg?w=2000"
            alt="img-top"
            />
        </TeaserCardImg>
        <TeaserCardTop>
            <div className="status-tag">Semantic</div>
            <span className="tag">{"06 SEP 2022"}</span>
        </TeaserCardTop>
        <TeaserCardHeader>
            <h4>This is a title</h4>
            <span className="subtitle">And this is a subtitle</span>
        </TeaserCardHeader>
        <TeaserCardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias ipsa quis, eum officia aliquid eaque cum
            illum voluptates nobis libero deserunt labore voluptas adipisci minima vero voluptatem veritatis. Rerum?
        </TeaserCardBody>
        <TeaserCardFooter>
            <button className="button_large">Join our newsletter</button>
        </TeaserCardFooter>
    </TeaserCard>
);

const LocationMapCardExample = (props?: ILocationMapCardProps) => (
    <LocationMapCard {...props} className="tag-ds">
        <LocationMapCardMap
        hoverButton={
            <button>
                <span className="material-icons">search</span>View more
            </button>
        }
        >
        <img
        src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/05/543113-asi-funciona-google-maps-conexion-internet.jpg"
        alt="img-top"
        />
        </LocationMapCardMap>
        <LocationMapCardTop>
            <div className="status-tag_success">semantic</div>
        </LocationMapCardTop>
        <LocationMapCardHeader>
            <h4>Location, location city</h4>
            <button className="button-card-icon">
                <span className="material-icons">edit</span>
            </button>
        </LocationMapCardHeader>
        <LocationMapCardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptate!</LocationMapCardBody>
    </LocationMapCard>
);

const IconCardExample = (props?: ICardIconProps) => (
    <div>
        <IconCard {...props} className="tag-ds">
            <IconCardIcon>
                <span className="material-icons">collections</span>
            </IconCardIcon>
            <IconCardHeader>
                <h4>This is a title</h4>
            </IconCardHeader>
            <IconCardBody>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, excepturi.</IconCardBody>
            <IconCardFooter>
                <a href="">link</a>
            </IconCardFooter>
        </IconCard>
    </div>
);

const DragAndDropCardExample = () => (
    <DragAndDropCard options={["option 1", "option 2"]} className="tag-ds">
        <DragAndDropCardHeader>Drag and drop card</DragAndDropCardHeader>
    </DragAndDropCard>
);

test('Card component should render', () => {
    const component = renderer.create(cardExample());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Figure card component should render', () => {
    const component = renderer.create(FigureCardExample());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Masonry card component should render', () => {
    const component = renderer.create(MasonryCardExample());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Teaser card component should render', () => {
    const component = renderer.create(TeaserCardExample());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Location map card component should render', () => {
    const component = renderer.create(LocationMapCardExample());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Icon card component should render', () => {
    const component = renderer.create(IconCardExample());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Drag and drop card component should render', () => {
    const component = renderer.create(DragAndDropCardExample());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Display drag and drop card component with options', () => {
    const {container} = render(DragAndDropCardExample());
    const menu = container.getElementsByClassName('dropdown-button')[0];
    if (menu) fireEvent.click(menu);
    expect(container.getElementsByClassName('dropdown-item')[0]).toBeVisible();
});

test('Display button on hover card image', () => {
    const {container, getByText} = render(LocationMapCardExample());
    const mapImage = container.getElementsByClassName('card-img')[0];
    if (mapImage) fireEvent.mouseOver(mapImage);
    const viewMoreButton = getByText('View more');
    expect(viewMoreButton).toBeVisible();
});





