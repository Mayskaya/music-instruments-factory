namespace MusicInstrumentsCrm.Domain.Transfer
{
	public interface IConverter<TDto, TDomain>
	{
		TDto ToDto(TDomain obj);

		TDomain ToDomain(TDto dto);
	}
}