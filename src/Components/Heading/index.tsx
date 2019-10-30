import React from 'react'

import { IHeading } from '@Interfaces'
import * as Styled from './styled'

export const Heading: React.SFC<IHeading.IProps> = ({ text }) => {
	return (
		<Styled.Title component="div">
			<Styled.Title back component="span">{text}</Styled.Title>
			<Styled.Title front component="span">{text}</Styled.Title>
		</Styled.Title>
	)
}
