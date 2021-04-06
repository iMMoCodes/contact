import React from 'react'
import { Icon, Placeholder } from 'semantic-ui-react'
import ImageThumb from '../../../components/ImageThumb'

const Favorites = ({ favorites, loading }) => {
	console.log(`favorites`, favorites)
	return (
		<div className='slider-container'>
			<Icon name='caret left' size='large' onClick={() => {}}></Icon>
			{favorites.length > 0 && (
				<div className='items-container'>
					{Array.isArray(favorites) &&
						favorites.map((item) => {
							return (
								<div
									key={
										item.id
									}
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
							)
						})}
				</div>
			)}
			<Icon name='caret right' size='large' onClick={() => {}}></Icon>

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
