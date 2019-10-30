import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { Heading } from '@Components'
import { HomeActions } from '@Actions'
import { withI18next } from '../../src/withI18next'
import './index.scss'

import { IHomePage, IStore } from '@Interfaces'

export const HomePage = ({ t, i18n }: IHomePage.IProps) => {
	const changeLanguage = (lang: string): void => {
		i18n.changeLanguage(lang)
	}

	const renderLocaleButtons = (activeLanguage: string) =>
		['en', 'es', 'tr'].map(lang => (
			<div
				key={lang}
				className={`button ${lang} ${activeLanguage === lang ? 'active' : ''}`}
				onClick={() => changeLanguage(lang)}
			>
				{lang}
			</div>
		))

	return (
		<div className="container">
			<div className="container__top">
				<img src="/images/pankod-logo.png" />
			</div>
			<div className="container__middle">
				<div className="container__middle__left">
					<div className="container__middle__left__buttons">
						{renderLocaleButtons(i18n.language)}
					</div>
				</div>
				<div className="container__middle__right">
					<span className="container__top_text">{t('common:Hello')}</span>
					<Heading text={t('common:World')} />
				</div>
			</div>
		</div>
	)

}

const mapStateToProps = (state: IStore) => state.home

const mapDispatchToProps = (dispatch: Dispatch) => ({
	Map: bindActionCreators(HomeActions.Map, dispatch),
})

const Extended = withI18next(['common'])(HomePage as any)

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Extended)
