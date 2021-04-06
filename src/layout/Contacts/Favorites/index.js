import React, { useRef } from 'react'
import { Icon, Placeholder } from 'semantic-ui-react'
import ImageThumb from '../../../components/ImageThumb'
import './style.css'

const Favorites = ({ favorites, loading }) => {
	const listRef = useRef(null)

	const showIcons = favorites.length > 2

	const scrollLeft = () => {
		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: -500,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: 500,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className='slider-container'>
			{showIcons && (
				<Icon
					className='icon-class'
					name='caret left'
					size='huge'
					onClick={scrollLeft}
				></Icon>
			)}
			{favorites.length > 0 && (
				<div className='items-container' ref={listRef}>
					{favorites.map((item) => (
						<div
							key={
								item.id
							}
							className='single-item-container'
						>
							<ImageThumb
								firstName={
									item.first_name
								}
								lastName={
									item.last_name
								}
								src={
									item.contact_picture
								}
								style={{
									width: 70,
									height: 70,
								}}
							/>
							<p className='name'>
								{
									item.first_name
								}
								{
									item.last_name
								}
							</p>
						</div>
					))}
				</div>
			)}
			{showIcons && (
				<Icon
					className='icon-class'
					name='caret right'
					size='huge'
					onClick={scrollRight}
				></Icon>
			)}

			{loading && (
				<>
					<Placeholder>
						<Placeholder.Header image>
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Header>
					</Placeholder>
				</>
			)}
		</div>
	)
}

export default Favorites
