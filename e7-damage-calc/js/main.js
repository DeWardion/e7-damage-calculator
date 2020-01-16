var app = new Vue ({
	el: '#vue-div',
	data:{
		hero: '',
		skill: '',
		heroList: heroes,
		ddshow: false,
		showSkill: false,
		heroSelected: '',
		soulburn: false,
		targetBool: false,
		elemAdvBool: false,
		heroS: {
			name: '',
			atk: '2500',
			def: '800',
			hp: '6000',
			curHP:'6000',
			spd: '100',
			chc: '15',
			chd: '150',
			eff: '0',
			dac: '5',
			attackStack5: '0',
			nonAtkStack10: '0',
			numBuffs: '0',
			enrage: false,
			full_focus: false,
			fucos_val: '0',
			heroSelected: false,
			showSkill1: false,
			showSkill2: false,
			showSkill3: false,
			EE1: false,
			EE2: false,
			EE3: false,
			allFire: false,
			invicible: false,
			s3Stack: '0',
			numHits: '1',
			stackCritD: '1',
		},
		enemy: {
			hp:'15000',
			curHP: '15000',
			defense: '1000',
			numDebuffs: 0,
			numTargets: '1',
			defBreak: false,
			decSpd: false,
			atkD: false,
			stun: false,
			unhealable: false,
			cannotBuff: false,
			sleep: false,
			decHitChance: false,
			silence: false,
			vampiricTouch: false,
			target: false,
			magicNail: false,
			bomb: false,
			burn: 0,
			bleed: 0,
			poison: 0,	
		}
	},
	methods: {
		defBreakBclicked: function(){
			//console.log("defBreakBclicked");
			app.enemy.defBreak = !app.enemy.defBreak;
			
			if(app.enemy.defBreak){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		decSpdBclicked: function(){
			app.enemy.decSpd = !app.enemy.decSpd;
			if(app.enemy.decSpd){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		atkDBclicked: function(){
			app.enemy.atkD = !app.enemy.atkD;
			if(app.enemy.atkD){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		stunBclicked: function(){
			app.enemy.stun = !app.enemy.stun;
			if(app.enemy.stun){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		unhealableBclicked: function(){
			app.enemy.unhealable = !app.enemy.unhealable;
			if(app.enemy.unhealable){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		cannotBuffBclicked: function(){
			app.enemy.cannotBuff = !app.enemy.cannotBuff;
			if(app.enemy.cannotBuff){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		sleepBclicked: function(){
			app.enemy.sleep = !app.enemy.sleep;
			if(app.enemy.sleep){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		silenceBclicked: function(){
			app.enemy.silence = !app.enemy.silence;
			if(app.enemy.silence){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		decHitChanceBclicked: function(){
			app.enemy.decHitChance = !app.enemy.decHitChance;
			if(app.enemy.decHitChance){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		vampiricTouchBclicked: function(){
			app.enemy.vampiricTouch = !app.enemy.vampiricTouch;
			if(app.enemy.vampiricTouch){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		targetBclicked: function(){
			app.enemy.target = !app.enemy.target;
			if(app.enemy.target){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		magicNailBclicked: function(){
			app.enemy.magicNail = !app.enemy.magicNail;
			if(app.enemy.magicNail){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		bombBclicked: function(){
			app.enemy.bomb = !app.enemy.bomb;
			if(app.enemy.bomb){
				app.enemy.numDebuffs++;
			} else {
				app.enemy.numDebuffs--;
			}
		},
		burnBclicked: function(){
		},
		bleedBclicked: function(){
		},
		poisonBClicked: function(){
		},
		ddclicked: function(){
			app.ddshow = true;
			//console.log("dd button clicked");
			//console.log(app.ddshow);
		},
		sbclicked: function(){
			app.soulburn = !app.soulburn;
			//console.log("SB CLICKED"+app.soulburn);
			app.getDMG(app.hero);
		},
		getData: function(hero){
			//console.log(hero);
			app.ddshow = false;
			
			for (key in heroes) {
				if(heroes[key].name == hero){
					//console.log(heroes[key]);
					app.hero = heroes[key];
					app.showSkills(hero);
				}
			}
			
			app.hero.stats = app.heroS;
			app.soulburn = false,
			app.enemy.targetBool = false,
			app.elemAdvBool = false,
			app.heroSelected = '',

			app.heroS.attackStack5 = '0',
			app.heroS.nonAtkStack10 = '0',
			app.heroS.numBuffs = '0',
			app.heroS.enrage = false,
			app.heroS.full_focus = false,
			app.heroS.fucos_val = '0',
			app.heroS.showSkill1 = false,
			app.heroS.showSkill2 = false,
			app.heroS.showSkill3 = false,
			app.heroS.EE1 = false,
			app.heroS.EE2 = false,
			app.heroS.EE3 = false,
			app.heroS.allFire = false,
			app.heroS.invicible = false,
			app.heroS.s3Stack = '0',
			app.heroS.numHits = '1',
			app.heroS.stackCritD = '1'
		},
		addMola: function(skill){
			mola = parseInt(skill.mola,10);
			if(mola + 1 > skill.enhance.length){
				//console.log("maxed");
			} else {
				mola =mola + 1;
			}
			skill.mola = mola;
		},
		subtractMola: function(skill){
			mola = parseInt(skill.mola,10);
			if (mola - 1 < 0) {
				//console.log("min'd");
			} else {
				mola = mola - 1;
			}
			skill.mola = mola;
		},
		showSkills: function(hero){
			app.showSkill = true;
			//console.log("this meme was sent by the show skills gang");
			app.getDMG(app.hero);
			//console.log(app.hero.skills);
		},
		getDMG: function(hero){
			for(skill in hero.skills){
				if (hero.skills[skill].enhance.length != 0){

					var hit = app.getFlatDmg(skill)/ app.getDef(skill);;
					var critDmg = (app.heroS.chd / 100)+(skill.critDmgBoost ? skill.critDmgBoost(soulburn) : 0) /*+(this.artifact.getCritDmgBoost()||0)*/;
					//mola = 1;
					//for (i = 0; i < hero.skills[skill].mola; i++){
					//	mola = mola + hero.skills[skill].enhance[i];
					//}
					hero.skills[skill].dmg =  Math.round(hit*critDmg);
				}
			}
		},
		getDef: function(skill){
			let mult = 1.0;
			if(app.enemy.defBreak){
				mult = mult*.3;
			}
			//console.log("def:"+ mult);
			return (((app.enemy.defense * mult)/300) * (1-(skill && skill.penetrate ? skill.penetrate() : 0))) + 1;
		},
		getFlatDmg: function(skillId, soulburn){
			const skill = app.hero.skills[skillId];

			const rate = (typeof skill.rate === 'function') ? skill.rate(app.soulburn) : skill.rate;
			const flatMod = (typeof skill.flat === 'function') ? skill.flat(app.soulburn) : 0;
			//const flatMod2 = this.artifact.getFlatMult();
			const pow = (typeof skill.pow === 'function') ? skill.pow(app.soulburn) : skill.pow;
			const atk =	app.getAtk();
			var mola = 1;
			for (i = 0; i < app.hero.skills[skillId].mola; i++){
				mola = mola + app.hero.skills[skillId].enhance[i];
			}
			const elemAdv = app.elemAdvBool ? 1.3 : 1.0;
			const target = app.enemy.targetBool ? 1.3 : 1.0;

			let dmgMod = 1.0 /*getGlobalDamageMult(this) + /*this.artifact.getDamageMultiplier()*/ +(skill.mult ? skill.mult(soulburn)-1 : 0);
			//console.log(dmgMod);
			return (((atk*rate + flatMod)*1.871 /*+ flatMod2*/) * pow * mola * elemAdv * target * dmgMod);
		},
		getAtk: function(){
			var modAtk = (app.hero.atkUp != undefined) ? app.hero.atkUp()*app.heroS.atk : app.heroS.atk;
			//console.log("mod:"+modAtk);
			return modAtk;
		}
	}
});
