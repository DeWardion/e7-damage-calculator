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
			spd: '100',
			chc: '15',
			chd: '150',
			eff: '0',
			dac: '5',
			curHP:'6000',
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
			debuffs: false,
			buffs: false,
			target: false,
			numDebuffs: '0',
			numTargets: '1',
			magicNail: false,
			bleed: false,
		}
	},
	methods: {
		ddclicked: function(){
			app.ddshow = true;
			console.log("dd button clicked");
			console.log(app.ddshow);
		},
		sbclicked: function(){
			app.soulburn = !app.soulburn;
			console.log("SB CLICKED"+app.soulburn);
			app.getDMG(app.hero);
		},
		getData: function(hero){
			console.log(hero);
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
			app.targetBool = false,
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
				console.log("maxed");
			} else {
				mola =mola + 1;
			}
			skill.mola = mola;
		},
		subtractMola: function(skill){
			mola = parseInt(skill.mola,10);
			if (mola - 1 < 0) {
				console.log("min'd");
			} else {
				mola = mola - 1;
			}
			skill.mola = mola;
		},
		showSkills: function(hero){
			app.showSkill = true;
			console.log("this meme was sent by the show skills gang");
			app.getDMG(app.hero);
			console.log(app.hero.skills);
		},
		getDMG: function(hero){
			for(skill in hero.skills){
				if (hero.skills[skill].enhance.length != 0){

					var hit = app.getFlatDmg(skill);
					var critDmg = (app.heroS.chd / 100)+(skill.critDmgBoost ? skill.critDmgBoost(soulburn) : 0) /*+(this.artifact.getCritDmgBoost()||0)*/;
					//mola = 1;
					//for (i = 0; i < hero.skills[skill].mola; i++){
					//	mola = mola + hero.skills[skill].enhance[i];
					//}
					hero.skills[skill].dmg =  Math.round(hit*critDmg);
				}
			}
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
			const target = app.targetBool ? 1.3 : 1.0;

			let dmgMod = 1.0;	/*getGlobalDamageMult(this) + /*this.artifact.getDamageMultiplier()(skill.mult ? skill.mult(soulburn)-1 : 0);*/ 
			return (((atk*rate + flatMod)*1.871 /*+ flatMod2*/) * pow * mola * elemAdv * target * dmgMod);
		},
		getAtk: function(){
			var modAtk = (app.hero.atkUp != undefined) ? app.hero.atkUp()*app.heroS.atk : app.heroS.atk;
			console.log("mod:"+modAtk);
			return modAtk;
		}
	}
});
