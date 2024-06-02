import { Box, Typography } from '@mui/material'
import Subtitle from './SubTitle'
import Grid from '@mui/material/Unstable_Grid2'

export default function Treatment() {
	return (
		<>
			<Subtitle subtitle='Treatment' />
			<Box sx={{ color: '#5F6527', px: 2 }}>
				<Grid container spacing={2}>
					<Grid xs={9} sx={{ mb: 6 }}>
						<Typography align='left' variant='h6' sx={{ my: 2 }}>
							ヨニスチーム
						</Typography>
						<Typography
							align='left'
							variant='body2'
							lineHeight={2}
							sx={{ my: 1 }}
						>
							はじめにカウンセリングを行い、身体の中で何が不足して身体が何を求めているのか診ていきます。10種類以上の薬草からオーダーメイドでブレンドしヨニスチームを受けていただきます。
							当サロンの薬草は奈良県宇陀市のものを使用しています。
							ヨニスチームの効果 妊活、PMS、生理痛、更年期、代謝UP、美肌等
						</Typography>
						<Box
							component='img'
							width='70%'
							src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/Treatment%2F%E3%83%A8%E3%83%8B%E3%82%B9%E3%83%81%E3%83%BC%E3%83%A0.jpg?alt=media&token=5fc470f2-8cbb-4a17-a801-387a33b5a3ff'
							alt='ヨニスチーム'
							sx={{ my: 3 }}
						/>
					</Grid>
					<Grid xs={3}></Grid>
					<Grid xs={3}></Grid>
					<Grid xs={9} sx={{ mb: 6, backgroundColor: 'rgba(220,188,113,0.3)' }}>
						<Typography align='left' variant='h6' sx={{ my: 2 }}>
							コアエナジー
							<br />
							（子宮・卵巣メンテナンス）
						</Typography>
						<Typography
							align='left'
							variant='body2'
							lineHeight={2}
							sx={{ my: 1 }}
						>
							まずは骨盤、脚、恥骨、子宮、卵巣の形、歪み等を診ていきます。
							<br />
							<br />
							子宮や卵巣は骨盤の中に収まっているものなので骨盤が歪むとその中にある子宮等を支えている筋肉や血管も歪み血の巡りが悪くなることで、冷えがおこります。
							<br />
							<br />
							血の巡りが悪くなると子宮筋腫やポリープ、生理不順やPMS、不妊症といった原因にもつながります。
							そこで、機械を使わずにオールハンドのみで骨盤〜子宮、卵巣までの調整を行なっていくのがコアエナジーです。
						</Typography>
						<Box
							component='img'
							width='70%'
							src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/Treatment%2F%E9%AA%A8%E7%9B%A4%E7%9F%AF%E6%AD%A3.jpg?alt=media&token=8e0a1de8-7ce8-4e11-9265-a80155996f12'
							alt='コアエナジー'
							sx={{ my: 3 }}
						/>{' '}
						<Typography
							align='left'
							variant='body2'
							lineHeight={2}
							sx={{ my: 1 }}
						>
							また正しい位置に整えてると同時にヨニスチームを浴びることで相乗効果が得られます。
							<br />
							<br />
							実際受けられた方の中には、
							<br />
							お尻の形が変わった
							<br />
							PMSが楽になった
							<br />
							数ヶ月続けることで妊娠した。
							<br />
							今まで排卵しなかったのに卵子がちゃんと発育して排卵するようになった。
							<br />
							生理痛が軽くなって薬を飲まなくてもよくなった
							<br />
							等さまざまな効果を実感していただける方もいらっしゃいました。
						</Typography>
					</Grid>
					<Grid xs={9} sx={{ mb: 6, backgroundColor: 'rgba(220,188,113,0.3)' }}>
						<Typography align='left' variant='h6' sx={{ my: 2 }}>
							ホットストーン
						</Typography>
						<Typography
							align='left'
							variant='body2'
							lineHeight={2}
							sx={{ my: 1 }}
						>
							ホットストーンであたためマッサージすることでリラックス効果やじんわりあたたまることで体がほぐれていくのがわかります。また、ホットストーンで子宮や卵巣をマッサージすることで血行促進やふかふかで柔らかい子宮を作ります
						</Typography>
						<Box
							component='img'
							width='70%'
							src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/Treatment%2F%E3%83%9B%E3%83%83%E3%83%88%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3.jpg?alt=media&token=3c504530-5eb7-454e-a597-039f792b8cfb'
							alt='ホットストーン'
							sx={{ my: 3 }}
						/>
					</Grid>
					<Grid xs={3}></Grid>
					<Grid xs={3}></Grid>
					<Grid xs={9} sx={{ mb: 6, backgroundColor: 'rgba(220,188,113,0.3)' }}>
						<Typography align='left' variant='h6' sx={{ my: 2 }}>
							石膏パック
						</Typography>
						<Typography
							align='left'
							variant='body2'
							lineHeight={2}
							sx={{ my: 1 }}
						>
							石膏でお顔パックすることでソフトup、ツヤ、エイジング、保湿効果、眼精疲労改善。石膏を載せていくと42℃まで上昇します。初めての方はあつくてびっくりしますがクセになります。自宅ではできない。サロンでしか味わえません。
						</Typography>
						<Box
							component='img'
							width='70%'
							src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/Treatment%2F%E7%9F%B3%E8%86%8F%E3%83%8F%E3%82%9A%E3%83%83%E3%82%AF.jpg?alt=media&token=5db53a65-66e0-46d0-9005-c345fe0c60d0'
							alt='石膏パック'
							sx={{ my: 3 }}
						/>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
