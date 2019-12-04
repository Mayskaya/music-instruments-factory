using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Moq;
using MusicInstrumentsCrm.Controllers;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Repositories;
using Xunit;

namespace MusicInstrumentsCrmTests.Controller
{
	public class GoodTypeControllerTest
	{
		[Fact]
		public async Task TestGetGoodType()
		{
			var mockRepository = new Mock<IGoodTypeRepository>();
			mockRepository.Setup((repo) => repo.FindAllAsync())
				.ReturnsAsync(GetTestGoodTypes());

			var controller = new GoodTypeController(mockRepository.Object);
			var result = await controller.GetGoodType(1);

//			var goodType = Assert.IsType<ObjectResult>(result);

//			var model = Assert.IsAssignableFrom<IEnumerable<GoodType>>(goodType.Value);
//			Assert.Equal(2, model.Count());
		}

		private List<GoodType> GetTestGoodTypes()
		{
			var sessions = new List<GoodType>
			{
				new GoodType {Id = 1, TypeName = "Гитара"},
				new GoodType {Id = 2, TypeName = "Электрогитара"}
			};
			return sessions;
		}
	}
}