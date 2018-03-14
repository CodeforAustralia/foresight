<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Curing_SFC</Name>
    <UserStyle>
      <Name>Curing_SFC</Name>
      <Title>Curing Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap>
              <ColorMapEntry color="#23dae7" quantity="0" label="0 - 5" />
              <ColorMapEntry color="#69f2b7" quantity="5" label="5 - 10" />
              <ColorMapEntry color="#81f785" quantity="10" label="10 - 15" />
              <ColorMapEntry color="#f5f35e" quantity="15" label="15 - 20" />
              <ColorMapEntry color="#f0b158" quantity="20" label="20 - 25" />
              <ColorMapEntry color="#dd6423" quantity="25" label="25 - 30" />
              <ColorMapEntry color="#ca0020" quantity="30" label="30 - 35" />
              <ColorMapEntry color="#cc0064" quantity="35" label="35 - 40" />
              <ColorMapEntry color="#a51c9e" quantity="40" label="40 - 45" />
              <ColorMapEntry color="#6c1ca5" quantity="45" label="45" />
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>